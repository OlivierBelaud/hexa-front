<script>
  import { Route } from "svelte-routing";
  import Home from '../pages/Home.svelte'
  import Page1 from '../pages/Page1.svelte'
  import Counter from '../../../counter/view/pages/Counter.svelte'
</script>

<Route path="/"><Home /></Route>
<Route path="page1" component="{Page1}" />
<Route path="counter" component="{Counter}" />
