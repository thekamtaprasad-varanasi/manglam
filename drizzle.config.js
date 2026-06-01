/** @type { import("drizzle-kit").Config } */
export default {
  dialect: "turso",
  schema: "./lib/schema.js",
  out: "./drizzle",
  dbCredentials: {
    url: "libsql://manglam-manglam.aws-ap-south-1.turso.io",
    authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3ODAzMDM2MjIsImlkIjoiMDE5ZTgyNTctMmIwMS03OTIyLWI5MGYtM2FkNzUwZDFmM2NhIiwicmlkIjoiMmUwY2QyYmItNTE2Yi00ZGY0LWI1YWUtMDU5YzY2MjU0YWYzIn0.GuT8B60I9rFJpnb3OcJcoZVoUj7rD6n3M3l759hSujLmCyDbCeUgmvdjV_mwqJzjBpm9JDl6vdlVaDfH_pFtDQ",
  },
};