import { Pinecone } from "@pinecone-database/pinecone";
import { PineconeStore } from "@langchain/pinecone";
import { OpenAIEmbeddings } from "@langchain/openai";
import { config } from "dotenv";
config();

export const createNamespace = async (req, res) => {
  try {
    const pc = new Pinecone({
      apiKey: process.env.PINECONE_API_KEY,
    });

    const pineconeIndex = pc.index("custom-chatbot");

    const ns1 = pineconeIndex.namespace("drapcode");
    //   await ns1.upsert([
    //     {
    //       id: "id-1",
    //       values: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
    //     },
    //   ]);

    res.send(ns1);
  } catch (err) {
    res.send(err);
  }
};
