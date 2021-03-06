import InputBox from "./InputBox"
import Post from "./Post"
import Stories from "./Stories"

const Feed = () => {
    return (
        <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide">
            <div className="mx-auto max-w-md md:max-w-lg ls:max-w-2xl">

                {/* stories */}
                <Stories />
                {/* input box */}
                <InputBox />
                {/* post */}
                <Post />

            </div>
        </div>
    )
}

export default Feed
