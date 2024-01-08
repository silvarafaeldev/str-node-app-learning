import { operation } from "../connection/connection.js";

class NycNeighborhoodRepository {
  async findAllBoronames() {
    const sql = "SELECT DISTINCT boroname FROM nyc_neighborhoods";
    return await operation(sql);
  }
}

export default new NycNeighborhoodRepository();
