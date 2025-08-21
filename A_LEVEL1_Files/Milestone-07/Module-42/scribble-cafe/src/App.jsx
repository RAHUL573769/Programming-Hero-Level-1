/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks";
import Header from "./Components/Header/Header";
import { useQuery } from "@tanstack/react-query";
function App() {
	const [bookmarks, setBookMarks] = useState([]);

	const { refetch } = useQuery({});
	const [bookmarkDelete, setbookmarkDelete] = useState([]);

	// useEffect(() => {}, []);
	const handleBookmark = (data) => {
		console.log(data);
		const newBookMarks = [...bookmarks, data];
		setBookMarks(newBookMarks);
	};
	const handleDelete = (id) => {
		console.log("Delete", id);

		const newBookMark = bookmarks?.filter((x) => x.id !== id);

		if (newBookMark) {
			setbookmarkDelete(newBookMark);
			refetch();
		}
	};
	console.log(bookmarks);
	return (
		<>
			<Header></Header>
			<div className='md:flex max-w-7xl mx-auto'>
				<Blogs
					handleBookmark={handleBookmark}
					handleDelete={handleDelete}
				></Blogs>
				<Bookmarks
					handleDelete={handleDelete}
					bookmarks={bookmarks}
				></Bookmarks>
			</div>
		</>
	);
}

export default App;
