"use client";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";

export default function LoginPage() {
	const router = useRouter();

	return (
		<section className="flex flex-col sm:flex-row bg-slate-100">
			<div className="px-4 hidden lg:block sm:px-16 gap-5 bg-[url('/login.jpg')] w-[800px] bg-no-repeat bg-cover bg-blend-multiply bg-slate-500 dark:bg-slate-700 w-full min-h-screen min-h-screen-100%"></div>
			<div className="flex w-100 p-12 min-h-screen lg:p-24 2xl:p-32 dark:bg-neutral-800 items-center justify-center w-full">
				<div>
					<div className="flex justify-center p-5 text-6xl font-bebas font-bold">
						<h1>Treinta y Uno</h1>
					</div>
					<div className="flex justify-center self-center items-center content-center">
						<Card className="flex flex-col justify-center gap-5 p-4 w-[300px] lg:w-[400px] h-auto dark:bg-neutral-600 self-center bg-neutral-100">
							<CardTitle className="flex justify-center font-bebas font-bold text-3xl">
								Sign In !
							</CardTitle>
							<form>
								<div className="flex flex-col gap-5 ">
									<Input
										type="text"
										placeholder="Username"
										className="font-bebas text-lg h-10 hover:border-2 hover:border-neutral-600 dark:hover:border-neutral-200 "
									/>
									<Input
										type="password"
										placeholder="Password"
										className=" font-bebas text-lg h-10 hover:border-2  hover:border-neutral-600 dark:hover:border-neutral-200"
									/>
								</div>
							</form>

							<div className="flex justify-center flex-col gap-2 items-center">
								<Button
									className="font-ubuntu h-10 w-[268px] justify-self-center text-sm"
									type="submit"
								>
									Log in
								</Button>
							</div>
							<Separator />
							<CardFooter className="flex justify-center flex-col gap-3">
								<div className="flex justify-center items-center flex-col gap-1 font-ubuntu text-2sm text-gray-500 dark:text-white">
									<p className="font-bold text-3sm">or</p>
									<p>Continue with</p>
								</div>
								<Button
									className="font-ubuntu flex gap-2 h-10 w-[268px] self-center font-semibold text-sm bg-neutral-100 text-black hover:bg-neutral-200"
									type="submit"
								>
									<FcGoogle size={21} /> Google
								</Button>
								<Button
									className="font-ubuntu h-10 w-[268px] flex gap-2 self-center font-semibold text-sm bg-blue-500 text-white hover:bg-blue-600"
									type="submit"
								>
									<FaFacebook size={21} />
									Facebook
								</Button>
							</CardFooter>
							<p className="font-ubuntu text-2sm text-gray-600 dark:text-white">
								Don&apos;t have an account yet?{" "}
								<a href="/signup" className="font-bold hover:underline">
									Join Us!
								</a>
							</p>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}
