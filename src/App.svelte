<script>
	// DB
	import { db } from "./firebase";
	import {
		collection,
		getDocs,
		doc,
		addDoc,
		updateDoc,
		deleteDoc,
		query
	} from "firebase/firestore";

	let game = 
	{
		name: "",
		description: "",
		genre: "",
		subgenre: "",
		img: ""
	}

	let games = [];

	let genre =
	{
		name: ""
	}

	let genres = [];

	let form_add_game;
	let form_add_genre;

	const add_game = async () =>
	{	
		
	}
	const add_genre = () =>
	{
		
	}
//Cargamos los juegos y géneros de la base de datos
	const loadGames = async () =>
	{
		let docs = [];
			const querySnapshot = await getDocs(collection(db, "Juegos"));
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			// console.log(doc.id, " => ", doc.data().name);
			});
			games = [...docs];
			console.log(games);
	}
	loadGames();
	const loadGenres = async () =>
	{
		let docs = [];
			const querySnapshot = await getDocs(collection(db, "generos"));
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			// console.log(doc.id, " => ", doc.data().name);
			});
			genres = [...docs];
			//console.log(genres);
	}
	loadGenres();
</script>

<main>
	<div class="general">
		<div class="mostrar">
			{#each games as g, i}
					<!-- Elemento -->
					<div
						class="bg-white b-b flex flex-col md:flex-row"
					>
						<div
							class="w-full mx-2 h-80 bg-gray-100 rounded-md p-2 my-2"
						>
							{#if g.image}
								<img
									class="object-center object-contain w-full h-full"
									src={g.image}
									alt="thumbnail"
								/>
							{:else}
								<img
									class="object-center object-contain w-full h-full"
									src="images/no-product.jpg"
									alt="thumbnail"
								/>
							{/if}
						</div>
						<div
							class="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2"
						>
							<p class="text-xl text-gray-700 font-bold">
								{g.name}
							</p>
							<p class="text-base text-gray-400 font-normal">
								Género: {g.genre} <br> Subgénero: {g.subgenre}
							</p>
							<p
								class="text-base leading-relaxed text-gray-500 font-normal"
							>
								{g.description || "Sin descripción"}
							</p>
							<!-- <div class="flex justify-start space-x-2">
								<button
									class="ml-5 bg-blue-200 py-1 px-2 border border-blue-500 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-blue-500 hover:text-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 focus:text-gray-700 focus:bg-blue-200"
									on:click={editarElemento(p)}
									><svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
										/>
									</svg>
								</button>
								<button
									class="ml-5 bg-red-200 py-1 px-2 border border-red-500 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-red-500 hover:text-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-red-300 focus:text-gray-700 focus:bg-red-200"
									on:click={eliminarElemento(p.id)}
									><svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
										/>
									</svg>
								</button>
							</div> -->
						</div>
					</div>
					<!-- Fin elemento -->
				{/each}
		</div>
		<div class="forms">


			<div class="form_game">
				<button class="send" on:click={add_game}>Añadir juego</button>
				<form bind:this={form_add_game}>
					<label for="game_name">Nombre: </label><br>
						<input type="text" id="game_name" bind:value={game.name}><br>
					<label for="game_desc">Descripción: </label><br>
						<textarea id="game_desc" rows=5 bind:value={game.description}></textarea><br>
					<label for="game_genre">Género: </label><br>
						<select id="game_genre" bind:value={game.genre}>
							{#each genres as g, i}
								<option value={g.nombre}>{g.nombre}</option>
							{/each}
						</select><br>
					<label for="game_subgenre">Subgénero: </label><br>
						<select id="game_subgenre" bind:value={game.subgenre}>
							{#each genres as g, i}
								<option value={g.nombre}>{g.nombre}</option>
							{/each}
						</select><br>
					<label for="game_img">URL de la imágen: </label><br>
						<input type="text" id="game_img" bind:value="{game.img}"><br>
				</form>
			</div>


			<div class="form_genre">
				<button class="send" on:click={add_genre}>Crear género</button>
				<form bind:this={form_add_genre}>
					<label for="genre_name">Nombre: </label><br>
						<input type="text" id="genre_name" bind:value={genre.name}><br>
				</form>
			</div>
		</div>
	</div>
</main>
