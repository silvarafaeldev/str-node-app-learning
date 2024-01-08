import { Router } from "express";
import NycNeighborhoodsController from "../controller/NycNeighborhoodsController.js";
import NycHomicidesController from "../controller/NycHomicidesController.js";

const router = Router();

router.get(
  "/neighborhoods/boronames",
  NycNeighborhoodsController.showNycNeighbourhoodBoronames
);
router.get("/homicides",            NycHomicidesController.showNycHomicides);
router.get("/homicides/:boroname",  NycHomicidesController.showNycHomicidesByBoroname);
router.delete("/homicides/:gid",    NycHomicidesController.deleteHomicideByGid);

export default router;
