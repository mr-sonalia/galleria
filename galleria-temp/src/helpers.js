import { getFirestore, collection } from "firebase/firestore";
import { doc, setDoc, getDoc, getDocs } from "firebase/firestore";
import { IMAGES_PATH } from "./config";

const db = getFirestore();

export const addDB = async (item) => {
	await setDoc(doc(collection(db, IMAGES_PATH)), {
		...item,
	});
};

export const readDB = async (setter, mode = "all", itemID = null) => {
	// eslint-disable-next-line default-case
	switch (mode) {
		case "all":
			try {
				const database = [];
				const response = await getDocs(collection(db, IMAGES_PATH));
				response.forEach((item) => database.unshift({ id: item.id, ...item.data() }));
				setter(database);
			} catch (error) {
				console.error(error);
			}
			break;
		case "any":
			try {
				const request = doc(db, IMAGES_PATH, itemID);
				const response = await getDoc(request);

				response.exists() && setter({ id: response.id, ...response.data() });
			} catch (error) {
				console.error(error);
			}
			break;
	}
};

export const updateDB = async (id, updatedData) => {
	await setDoc(doc(collection(db, IMAGES_PATH), id), {
		...updatedData,
	});
};

// const tempProps = [
// 	{
// 		src: "https://firebasestorage.googleapis.com/v0/b/galleria-0001.appspot.com/o/Galleria%20Assets%2Fimage-3.jpg?alt=media&token=ecf68b15-8cdc-47bc-8eab-98a4512c9c2f",
// 		title: "Minimal Plant",
// 		contributors: ["Yash", "Jai"],
// 		likes: 0,
// 	},
// 	{
// 		src: "https://firebasestorage.googleapis.com/v0/b/galleria-0001.appspot.com/o/Galleria%20Assets%2Fimage-5.jpg?alt=media&token=852faba2-ddad-49a3-8666-6a6c1cd73b17",
// 		title: "Minimal Plant",
// 		contributors: ["Yash", "Jai"],
// 		likes: 0,
// 	},
// 	{
// 		src: "https://firebasestorage.googleapis.com/v0/b/galleria-0001.appspot.com/o/Galleria%20Assets%2Fimage-10.jpg?alt=media&token=619bca4e-1afd-4e4a-943b-1bd3d1f099c9",
// 		title: "Minimal Plant",
// 		contributors: ["Yash", "Jai"],
// 		likes: 0,
// 	},
// 	{
// 		src: "https://firebasestorage.googleapis.com/v0/b/galleria-0001.appspot.com/o/Galleria%20Assets%2Fimage-13.jpg?alt=media&token=dbdecca2-c176-488a-92a5-aee7339defdc",
// 		title: "Minimal Plant",
// 		contributors: ["Yash", "Jai"],
// 		likes: 0,
// 	},
// 	{
// 		src: "https://firebasestorage.googleapis.com/v0/b/galleria-0001.appspot.com/o/Galleria%20Assets%2Fimage-7.jpg?alt=media&token=e9bbb5fc-26fa-456f-9f42-27b9cd8d1804",
// 		title: "Minimal Plant",
// 		contributors: ["Yash", "Jai"],
// 		likes: 0,
// 	},
// 	{
// 		src: "https://firebasestorage.googleapis.com/v0/b/galleria-0001.appspot.com/o/Galleria%20Assets%2Fimage-9.jpg?alt=media&token=d772fed7-3c4b-4133-ad46-f9722a40a794",
// 		title: "Minimal Plant",
// 		contributors: ["Yash", "Jai"],
// 		likes: 0,
// 	},

// 	{
// 		src: "https://firebasestorage.googleapis.com/v0/b/galleria-0001.appspot.com/o/Galleria%20Assets%2Fimage-8.jpg?alt=media&token=bab9e48c-f932-4870-8006-b32fa708f58d",
// 		title: "Minimal Plant",
// 		contributors: ["Yash", "Jai"],
// 		likes: 0,
// 	},
// 	{
// 		src: "https://firebasestorage.googleapis.com/v0/b/galleria-0001.appspot.com/o/Galleria%20Assets%2Fimage-12.jpg?alt=media&token=a7f55daf-94b9-4439-893b-fcbec5fbc927",
// 		title: "Minimal Plant",
// 		contributors: ["Yash", "Jai"],
// 		likes: 0,
// 	},
// 	{
// 		src: "https://firebasestorage.googleapis.com/v0/b/galleria-0001.appspot.com/o/Galleria%20Assets%2Fimage-11.jpg?alt=media&token=b7f5efb2-73e2-480c-a2ae-65062c333680",
// 		title: "Minimal Plant",
// 		contributors: ["Yash", "Jai"],
// 		likes: 0,
// 	},

// 	{
// 		src: "https://firebasestorage.googleapis.com/v0/b/galleria-0001.appspot.com/o/Galleria%20Assets%2Fimage-16.jpg?alt=media&token=8611c0ac-5bc9-4ed1-a4ef-9c41556ad2dd",
// 		title: "Wring Wring",
// 		contributors: ["Mike Myers"],
// 		likes: 0,
// 	},
// 	{
// 		src: "https://firebasestorage.googleapis.com/v0/b/galleria-0001.appspot.com/o/Galleria%20Assets%2Fimage-17.jpg?alt=media&token=659ec31e-8739-41fb-8f57-e6a3cb0873ec",
// 		title: "Growth",
// 		contributors: ["Yapo Zhou"],
// 		likes: 0,
// 	},
// 	{
// 		src: "https://firebasestorage.googleapis.com/v0/b/galleria-0001.appspot.com/o/Galleria%20Assets%2Fimage-18.jpg?alt=media&token=1b1b3b31-9b3d-4b6d-8678-a029ef901622",
// 		title: "Orange Hanger",
// 		contributors: ["Andrej Lisakov"],
// 		likes: 0,
// 	},
// 	{
// 		src: "https://firebasestorage.googleapis.com/v0/b/galleria-0001.appspot.com/o/Galleria%20Assets%2Fimage-19.jpg?alt=media&token=a16a1a2b-250d-47d7-9f41-d49187b7c177",
// 		title: "Sketch Ready",
// 		contributors: ["Joanna Kosinska"],
// 		likes: 0,
// 	},
// 	{
// 		src: "https://firebasestorage.googleapis.com/v0/b/galleria-0001.appspot.com/o/Galleria%20Assets%2Fimage-20.jpg?alt=media&token=f27002f5-b553-46e8-b8ca-d8c14890a3d5",
// 		title: "Fly High",
// 		contributors: ["Miti"],
// 		likes: 0,
// 	},
// 	{
// 		src: "https://firebasestorage.googleapis.com/v0/b/galleria-0001.appspot.com/o/Galleria%20Assets%2Fimage-21.jpg?alt=media&token=debdd6a8-08eb-4d83-afaa-6f97cc0e1157",
// 		title: "Pink-ception",
// 		contributors: ["Max Ostrozhinskiy"],
// 		likes: 0,
// 	},
// 	{
// 		src: "https://firebasestorage.googleapis.com/v0/b/galleria-0001.appspot.com/o/Galleria%20Assets%2Fimage-22.jpg?alt=media&token=011bab9f-2282-4ce2-8f46-9facd910a555",
// 		title: "Kissing Rings",
// 		contributors: ["Augustine Wong"],
// 		likes: 0,
// 	},
// 	{
// 		src: "https://firebasestorage.googleapis.com/v0/b/galleria-0001.appspot.com/o/Galleria%20Assets%2Fimage-23.jpg?alt=media&token=6a25d2f2-3976-42eb-a48e-de3c1002a904",
// 		title: "Sands of Time",
// 		contributors: ["Sumner Mahaffey"],
// 		likes: 0,
// 	},
// 	{
// 		src: "https://firebasestorage.googleapis.com/v0/b/galleria-0001.appspot.com/o/Galleria%20Assets%2Fimage-24.jpg?alt=media&token=e0993976-3f9d-48cb-8012-93cf902b04d6",
// 		title: "Walking Man?",
// 		contributors: ["Emile Seguin"],
// 		likes: 0,
// 	},
// 	{
// 		src: "https://firebasestorage.googleapis.com/v0/b/galleria-0001.appspot.com/o/Galleria%20Assets%2Fimage-25.jpg?alt=media&token=69f6f23d-de97-4af9-85fa-055a2953ac90",
// 		title: "Color Warp",
// 		contributors: ["Bia Andrade"],
// 		likes: 0,
// 	},
// ];

// console.log("pp");

// const tempProps = [
// 	{
// 		src: "https://firebasestorage.googleapis.com/v0/b/galleria-0001.appspot.com/o/Galleria%20Assets%2Fimage-18.jpg?alt=media&token=1b1b3b31-9b3d-4b6d-8678-a029ef901622",
// 		title: "Orange Hanger",
// 		contributors: ["Andrej Lisakov"],
// 		likes: 40,
// 	},

// 	{
// 		src: "https://firebasestorage.googleapis.com/v0/b/galleria-0001.appspot.com/o/Galleria%20Assets%2Fimage-20.jpg?alt=media&token=f27002f5-b553-46e8-b8ca-d8c14890a3d5",
// 		title: "Fly High",
// 		contributors: ["Miti"],
// 		likes: 110,
// 	},
// ];
