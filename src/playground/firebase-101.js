//child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

//child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

//child_added
database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

database
  .ref('expenses')
  .once('value')
  .then((snapshot) => {
    const expenses = [];

    snapshot.forEach((childSnapshot) => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val(),
      });
    });
    console.log(expenses);
  });

database.ref('expenses').on('value', (snapshot) => {
  const expenses = [];
  snapshot.forEach((childSnapshot) => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val(),
    });
  });
  console.log(expenses);
});

database.ref('expenses').push({
  description: 'Rent',
  note: '',
  amount: 1205,
  createdAt: 3215648979335,
});
database.ref('expenses').push({
  description: 'Bike',
  note: '',
  amount: 89205,
  createdAt: 3215648979335,
});
database.ref('expenses').push({
  description: 'Food',
  note: '',
  amount: 16265,
  createdAt: 3215648979335,
});

database.ref().on('value', (snapshot) => {
  console.log(snapshot.val());
});

setTimeout(() => {
  database.ref('name').set('Malgorzata');
}, 3500);

database
  .ref()
  .once('value')
  .then((snapshot) => {
    const val = snapshot.val();
    console.log(val);
  })
  .catch((e) => {
    console.log('Error fetching data', e);
  });

database
  .ref('name')
  .once('value')
  .then((snapshot) => {
    const val = snapshot.val();
    console.log(val);
  })
  .catch((e) => {
    console.log('Error fetching data', e);
  });

database
  .ref()
  .set({
    name: 'Anna',
    age: 28,
    job: 'cook',
    location: {
      city: 'Warszawa',
      country: 'Poland',
    },
  })
  .then(() => {
    console.log('Data is saved');
  })
  .catch(() => {
    console.log('This failed.', error);
  });

database.ref('location/city').set('Krakow');
database.ref('attributes').set({
  height: 73,
  weight: 100,
});

database.ref().update({
  job: 'manager',
  'location/city': 'Wadowice',
});

database.ref().update({
  name: null,
  age: 36,
  job: 'cook',
});

database.ref('age').set(null);

database
  .ref()
  .remove()
  .then(() => {
    console.log('age was removed');
  })
  .catch((e) => {
    console.log('did not remove data', e);
  });
