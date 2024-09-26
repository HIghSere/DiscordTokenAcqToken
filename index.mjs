import axios from "axios";
import PromptSync from "prompt-sync";
const prompt = PromptSync();
import fs from "fs";

main();
async function main() {
    const email = prompt("email> ");
    const password = prompt("password> ");
    if (
        !token ||
        typeof token !== "string"
        } throw new Error("Token is invalid.");
    try {
        await axios.post("https://discord.com/api/v9/auth/login", {
            "login": email,
            "password": password,
            "undelete": false,
            "login_source": undefined,
            "gift_code_sku_id": undefined,
        }, {
            headers: {
                "Content-Type": "application/json",
                "X-Super-Properties": "eyJvcyI6ImlPUyIsImJyb3dzZXIiOiJNb2JpbGUgU2FmYXJpIiwiZGV2aWNlIjoiIiwic3lzdGVtX2xvY2FsZSI6ImphIiwiYnJvd3Nlcl91c2VyX2FnZW50IjoiTW96aWxsYS81LjAgKE1hY2ludG9zaDsgSW50ZWwgTWFjIE9TIFggMTBfMTVfNykgQXBwbGVXZWJLaXQvNjA1LjEuMTUgKEtIVE1MLCBsaWtlIEdlY2tvKSBWZXJzaW9uLzE2LjEgU2FmYXJpLzYwNS4xLjE1IiwiYnJvd3Nlcl92ZXJzaW9uIjoiMTYuMSIsIm9zX3ZlcnNpb24iOiIxMC4xNS43IiwicmVmZXJyZXIiOiIiLCJyZWZlcnJpbmdfZG9tYWluIjoiIiwicmVmZXJyZXJfY3VycmVudCI6IiIsInJlZmVycmluZ19kb21haW5fY3VycmVudCI6IiIsInJlbGVhc2VfY2hhbm5lbCI6InN0YWJsZSIsImNsaWVudF9idWlsZF9udW1iZXIiOjMxMzM0NCwiY2xpZW50X2V2ZW50X3NvdXJjZSI6bnVsbH0=",
                "X-Fingerprint": "1266621309891252297.g8XepAuy1WkVvK3Lr3tcRqvwFZA",
                "X-Discord-Locale": "ja",
                "X-Discord-Timezone": "Asia/Tokyo",
                "X-Debug-Options": "bugReporterEnabled",
            }
        }).then((response) => {
            if (response.status === 200) {
                console.log("✓Success Authorization:", response.data.token);
            } else {
                console.log("✖Failed status:", response.status);
            }
        });
    } catch (error) {
        console.error("Error:", error);
    }
    process.stdin.resume();
}
