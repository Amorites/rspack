const path = require("path");
const { describeByWalk, createHotStepCase } = require("../dist");

const NAME = "HotStepTestCasesNode";
const caseDir = path.resolve(__dirname, "./hotCases");
const distDir = path.resolve(__dirname, `./js/hot-step-cases-web`);

process.env["RSPACK_HOT_TEST"] = "true";

describeByWalk(NAME, caseDir, distDir, (name, src, dist) => {
	createHotStepCase(name, src, dist, "web");
});
