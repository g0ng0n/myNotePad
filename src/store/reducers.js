const initialState = {
	notes : [
		{
			id: '213',
			title: 'sarasa',
			details: 'sasas',
		},
		{
			id: '123123',
			title: 'asdasd',
			details: 'asdasd',
		},
		{
			id: '1sss23123',
			title: 'asdasd',
			details: 'asdasd',
		}
	],
	name: 'Manny'
}

export default (state = initialState, action) => {

	switch (action.type){
		case 'ADD_NOTE':
			return {
				...state,
				notes: [...state.notes, action.note],
			}
		case 'REMOVE_NOTE':
			return {
				...state,
				notes: state.notes.filter(note => note !== action.note),
			}
		case 'GET_NOTES':
			return {
				...state
			}
		default:
			return state;
	}
} 
	