import Feed from "@components/Feed";

const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">
                Discover and Share
                <br className="max-md:hidden" />
                <span className="orange_gradient text-center">AI-Powered Prompts</span>
            </h1>
            <p className="desc text-center">
                RE:Promptopia is a copy prototype of Prompotopia, an open-source AI Prompt to create and share creative prompt
            </p>

            {/* Feed */}
            <Feed />
        </section>
    )
}

export default Home