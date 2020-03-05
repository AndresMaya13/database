import ProductionBridge from "./bridges/production";
import FakeBridge from "./bridges/fake";
import constants from "../constants/constants";

const bridge = constants.ENV == "production" ? ProductionBridge : FakeBridge;
export default bridge;