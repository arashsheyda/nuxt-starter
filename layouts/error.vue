<template>
<div>
    <div v-if="error.statusCode === 404" id="content" class="site-content">
        <div class="container">
            <div class="error-404 not-found text-center">
                <h2>404 <img class="error-image" src="images/404.png" alt="404" /></h2>
                <h1>Sorry! Page Not Found!</h1>
                <div class="content-404">
                    <p>Oops! The page you are looking for does not exist. Please return to the site’s homepage.</p>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="site-content">
        <div class="container">
            <div class="error text-center">
                <h1>{{ error }}</h1>
                <div class="content-error">
                    <p>Oops! The page you are looking for does not exist. Please return to the site’s homepage.</p>
                </div>
            </div>
        </div>
    </div>
    <NuxtLink to="/">Home page</NuxtLink>
</div>
</template>

<script>
export default {
    layout: 'error',
    props: ['error'],
};
</script>
