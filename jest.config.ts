import type { Config } from "jest"

const config: Config = {
    testMatch: ["**/test/integration/**/*.ts"],
    transform:{
        "^.+\\.ts$": "ts-jest"
    },
    reporters: [
        "default",
        [
            "jest-html-reporter",
            {
                theme:"darkTheme",
                pageTitle: "Test Report",
                outputPath: "reports/test-report.html",
                includeFailureMsg: true,
                includeConsoleLog: true
                        
            }
        ]
    ] 
}

export default config