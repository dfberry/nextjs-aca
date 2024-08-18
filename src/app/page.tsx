import Image from "next/image";
import { CONFIG } from "@/lib/config";

export default function Home() {
  const redirect_uri = encodeURIComponent(CONFIG.GH_REDIRECT_URI);
  const URL = `https://github.com/login/oauth/authorize?client_id=${CONFIG.GH_CLIENT_ID}&redirect_uri=${redirect_uri}`;

  const envVars = process.env;

  console.log(CONFIG);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <a href={URL}>GitHub Login</a>
      <div className="container mx-auto p-12 overflow-auto">
        <h1>Environment Variables</h1>
        <div className="p-12">
          {Object.entries(envVars)
            .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
            .map(([key, value]) => (
              <div key={key} className="mb-2">
                <strong>{key}:</strong> {value}
              </div>
            ))}
        </div>
      </div>
      <div className="container mx-auto p-12 overflow-auto">
        <h1>CONFIG</h1>
        <div className="p-12">
          {Object.entries(CONFIG)
            .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
            .map(([key, value]) => (
              <div key={key} className="mb-2">
                <strong>{key}:</strong> {value}
              </div>
            ))}
        </div>
      </div>      
    </main>
  );
}
