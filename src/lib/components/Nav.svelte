<nav> 
    <ul>
        <li>
            <a href="/mypage"> My Page </a>
        </li>
        <li>
            <a href="/about"> About </a>
        </li>
    </ul>
</nav>

<style lang='scss'>
    nav {
        display: flex;
        align-items: center;

        ul {
            margin: 0;
            list-style-type: none;
            display: flex;
            gap: 1rem;

            li {
                font-weight: 400;

                a {
                    text-decoration: none;
                    color: #A0CBB1;
                }

                &:hover {
                    text-decoration: underline;
                }
            }
        }
        
    }
</style>