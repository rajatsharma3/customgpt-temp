import { Router } from "express";
import { addDocument } from "./addDocument.js";
import { getAns } from "./retriveData.js";
import { createNamespace } from "./createNamespace.js";

const appRoute = new Router();

appRoute.get("/adddocument", addDocument);
appRoute.get("/getans", getAns);
appRoute.get("/createnamespace", createNamespace);

export default appRoute;
