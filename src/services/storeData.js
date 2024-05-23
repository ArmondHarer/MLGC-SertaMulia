const { Firestore } = require("@google-cloud/firestore");

const db = new Firestore({ databaseId: "firestore-mlgc-armondharer" });

async function storeData(id, data) {
	const predictCollection = db.collection("firestore-mlgc-armondharer");
	return predictCollection.doc(id).set(data);
}

async function getData() {
	const querySnapshot = await db.collection("firestore-mlgc-armondharer").get();
	const data = querySnapshot.docs.map((doc) => {
		return { id: doc.id, history: doc.data() };
	});

	return data;
}
