<template>
    <nav>
        <div class="logo">
            Blog
        </div>
        <div class="menus">
            <div>Home</div>
            <div>
                <span>News</span>
                <i class="fa-solid fa-angle-down"></i>
                <ul class="dropdown">
                    <li>Today</li>
                    <li>Yesterday</li>
                    <li>Last week</li>
                </ul>
            </div>
            <!-- <div>
                <span>About us</span>
                <i class="fa-solid fa-angle-down"></i>
                <ul class="dropdown">
                    <li>Today</li>
                    <li>Yesterday</li>
                    <li>Last week</li>
                </ul>
            </div> -->

            <button class="get_started">Get started</button>
        </div>
    </nav>
</template>
<script>
export default {
    
}
</script>

<style scoped>
* {
    color: white;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

div.menus {
    display: flex;
    /* gap: 20px; */
    align-items: center;
}

div.menus > div {
    /* background: rgb(181, 181, 239); */
    padding: 10px 20px;
    position: relative;
}

div.menus > div ul.dropdown {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    list-style: none;
    margin: 0;
    background: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    /* border-radius: 6px; */
     
    li{
        cursor: pointer;
        color: #0D328A !important;
        padding:6px 10px;

        &:hover {
            color: white !important;
            background-color: #0D328A;
        }
    }
}

div.menus > div:hover ul.dropdown {
    display: block;
}

i.fa-solid {
    transform: rotate(0);
    transition: .2s ease-in-out;
}

div.menus > div:hover i.fa-solid {
    transform: rotate(-180deg);
}

button.get_started {
    cursor: pointer;
    display: block;
    padding: 6px 12px;
    border-radius: 10px;
    border: 1px solid;
    background-color: transparent;
}
</style>