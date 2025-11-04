import { defineConfig } from "vitest/config"

export default defineConfig({
    test: {
        reporters: ["default", "verbose"],
        environment: "jsdom",
        include: ["src/**/__tests__/*.spec.ts"],
        coverage: {
            provider: "istanbul",
            reporter: ["text", "lcov"],
        },
    },
})
