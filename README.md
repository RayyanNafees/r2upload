# R2 uploader Drag & Drop

This is the boilerplate code for drag and drop file upload functionality on Cloudflare R2 object storage

## Tech Stack

`client`

- React
- Sonner Toast
- TailwindCSS
- react-dropzone

`server`

- Deno + aws4fetch

## Setup

1. Go to cloudflare and create an R2 bucket (preferrable with `amulet-pdfs` name)
2. Go to its settings then CORS policy and then set the CORS policy content to that of [r2cors.json](/server/r2cors.json) file in server folder

## Running

1. Deploy the Deno URL signer code in `server` directory to some Deno Playground](dash.deno.dev/playground) or [Val](https://val.town)
2. change the link in [upload.ts](/upload.ts) of that of the URL signer u just uploaded
