const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacList: [],
		},
		actions: {
			saluda: () => {
				
			},	
			addContact: (contact) => {
				const store = getStore();
				setStore({contacList: [...store.contacList, contact]})
			},
			delete: (index) => {
				//get the store
				const store = getStore();

				const contact = store.users.filter((c, i) => {
					return index !== i
				});
				//reset the global store
				setStore({ users: contact });
			}, 
			deleteContact : (id) => {
				const store = getStore();
				setStore({contacList : store.contacList.filter((contact, index) => id !== index)})
			},
			modifyEditContact : (id, contact) => {
				const store = getStore();
				let newList = store.contacList.filter((contact, index) => index !== id );
				setStore({contacList: [...newList, contact]})

			}
		}
	};
};

export default getState;




