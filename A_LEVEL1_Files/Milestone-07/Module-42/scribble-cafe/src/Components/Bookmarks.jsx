import SingleBookmark from "./SingleBookmark";

const Bookmarks = ({ bookmarks, handleDelete }) => {
	console.log("Bookmarks", bookmarks);
	return (
		<div className='md:w-1/3 mr-4'>
			<h1>Hi From Bookmarks{bookmarks.length}</h1>

			{bookmarks.map((x) => (
				<SingleBookmark handleDelete={handleDelete} x={x}></SingleBookmark>
			))}
		</div>
	);
};

export default Bookmarks;
