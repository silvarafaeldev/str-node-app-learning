import NycNeighborhoodRepository from "../repositories/NycNeighborhoodRepository.js";

class NycNeighbourhoodsController {
  async showNycNeighbourhoodBoronames(_, res) {
    try {
      const result = await NycNeighborhoodRepository.findAllBoronames();
      if (result.length > 0) res.status(200).json(result);
      else res.status(404).json({ message: "No records to display." });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error during execution.", error: error });
    }
  }
}

export default new NycNeighbourhoodsController();
