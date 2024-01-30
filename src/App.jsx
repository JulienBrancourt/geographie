import { data } from "autoprefixer";
import { useState, useEffect } from "react";
//https://restcountries.com/v3.1/region/europe


function App() {
const [ListCountries, setListCountries] = useState(null);

useEffect(() => {
	fetch("https://restcountries.com/v3.1/region/europe")
		.then((data) => data.json())
		.then((data) => {
			console.log(data);
			data.sort((a, b) => a.name.common.localeCompare(b.name.common))
				// if (a.name.common < b.name.common) {
				// 	return -1;
				// } else if (a.name.common > b.name.common) {
				// 	return 1;
				// }
			// });
			setListCountries(data);
		});
}, []);


	return (
		<div className="min-h-screen bg-slate-800">
			<div className="max-w-7xl mx-auto py-20 px-4">
        <h1 className="text-gray-50 text-4xl">Europe Countries Data</h1>
        <p className="text-gray-100 text-xl mb-8"> Click !</p>
			</div>
		</div>
	);
}

export default App;
