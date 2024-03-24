import './NoteList.css';
import { deleteNote } from '../../redux/actions/noteActions.js';
import { useSelector, useDispatch } from 'react-redux';
function NoteList() {
	const dispatch = useDispatch();
	const { notes } = useSelector((state) => state.notes);
	return (
		<div className='container'>
			<ul>
				{notes.map((note, index) => (
					<li>
						<p>{note.createdOn.toLocaleDateString()}</p>
						<p className='note-content'>{note.text}</p>
						<button
							className='btn btn-danger'
							onClick={() => dispatch(deleteNote(index))}>
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default NoteList;
