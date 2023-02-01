<!-- routes/+page.ts -->
<script lang="ts">
	import { page } from "$app/stores";
	import { trpc } from "$lib/trpc/client";

	let greeting = "press the button to load data";

	const loadData = async () => {
		greeting = await trpc($page).greeting.query("foo");
	};
</script>

{#await loadData() then _}
	{greeting}
{/await}
