import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { uploadFile } from "../utils/upload";
import { toast } from "sonner";
import Progress from "./Progress";

function Form() {
	const [progress, setProgress] = useState(0);
	const onDrop = useCallback((acceptedFiles: File[]) => {
		console.log(acceptedFiles);
		const promise = Promise.all(
			acceptedFiles.map((file) => {
				return uploadFile(file, setProgress);
			}),
		);

		toast.promise(promise, {
			loading: "Loading...",
			success: () => {
				return `${acceptedFiles.length} files uploaded`;
			},
			error: "Error uploading file",
		});
		// Do something with the files
	}, []);
	const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
		onDrop,
		noClick: true,
	});

	return (
		<div
			className="flex relative justify-center items-center px-4 py-12 min-h-screen bg-gray-500 bg-no-repeat bg-cover sm:px-6 lg:px-8"
			style={{
				backgroundImage:
					"url(https://images.unsplash.com/photo-1621243804936-775306a8f2e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)",
			}}
		>
			<div className="absolute inset-0 z-0 bg-black opacity-60"> </div>
			<div className="z-10 p-10 w-full bg-white rounded-xl sm:max-w-lg">
				<div className="text-center">
					<h2 className="mt-5 text-3xl font-bold text-gray-900">
						File Upload!
					</h2>
					<p className="mt-2 text-sm text-gray-400">
						Drop your exam files to organise
					</p>
				</div>
				<form className="mt-8 space-y-3" action="/" method="POST">
					<div className="grid grid-cols-1 space-y-2">
						<label
							htmlFor="email"
							className="text-sm font-bold tracking-wide text-gray-500"
						>
							Title
						</label>
						<input
							id="email"
							className="p-2 text-base rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
							type=""
							placeholder="mail@gmail.com"
						/>
					</div>
					<div className="grid grid-cols-1 space-y-2" {...getRootProps()}>
						<label
							htmlFor="file"
							className="text-sm font-bold tracking-wide text-gray-500"
						>
							Attach Document
						</label>
						<div className="flex justify-center items-center w-full">
							<label className="flex flex-col p-10 w-full h-60 text-center rounded-lg border-4 border-dashed group">
								<div className="flex flex-col justify-center items-center w-full h-full text-center">
									{/* <!---<svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-400 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>--> */}
									<div className="flex flex-auto mx-auto -mt-10 w-2/5 max-h-48">
										<img
											className="object-center h-36 has-mask"
											src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg"
											alt="freepik img"
										/>
									</div>
									{!isDragActive ? (
										<p className="text-gray-500 pointer-none">
											<span className="text-sm">Drag and drop</span> files here
											<br /> or
											<button
												type="button"
												className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-500 hover:cursor-pointer"
												onClick={open}
											>
												select a file from your computer
											</button>
										</p>
									) : (
										<p className="text-gray-500 pointer-none">
											<span className="text-sm"> Drop files</span>
										</p>
									)}
								</div>
								<input
									type="file"
									id="file"
									className="hidden"
									{...getInputProps()}
								/>
							</label>
						</div>
					</div>
					<p className="text-sm text-gray-300">
						<span>File type: doc,pdf,types of images</span>
					</p>
					<div>
						<button
							type="submit"
							className="flex justify-center p-4 my-5 w-full font-semibold tracking-wide text-gray-100 bg-blue-500 rounded-full shadow-lg transition duration-300 ease-in cursor-pointer focus:outline-none focus:shadow-outline hover:bg-blue-600"
						>
							Upload
						</button>
					</div>
					{progress && <Progress progress={progress} />}
				</form>
			</div>
		</div>
	);
}

export default Form;
