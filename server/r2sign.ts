import { AwsClient } from "aws4fetch";

Deno.serve(async(req: Request) =>{
     const query = (name: string) => new URL(req.url).searchParams.get(name);

  const accessKeyId = Deno.env.get("CLOUDFLARE_ACCESS_KEY_ID");
  const secretAccessKey = Deno.env.get("CLOUDFLARE_SECRET_ACCESS_KEY");
  const accountId = Deno.env.get("CLOUDFLARE_ACCOUNT_ID");

  console.log({
    accessKeyId,
    secretAccessKey,
    accountId,
  })
  const filename = query("filename") ?? `${Date.now()}-file.txt`;
  const bucket = query("bucket") ?? "amulet-pdfs";

  const r2 = new AwsClient({
    accessKeyId,
    secretAccessKey,
  });

  const url = new URL(
    `https://${bucket}.${accountId}.r2.cloudflarestorage.com/${filename}`,
  );

  const signed = await r2.sign(
    new Request(url, {
      method: "PUT",
    }),
    {
      aws: { signQuery: true, allHeaders: true, region: "auto" },
    },
  );

  return new Response(signed.url, { status: 200,  headers: {
      'Access-Control-Allow-Origin':'*'
    } });
});
