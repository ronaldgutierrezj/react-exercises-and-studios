export default function HobbyLinks(){
    const hobbyLinks = ['https://www.timeout.com/music/the-50-best-80s-songs' , "https://www.jigsawplanet.com/","https://www.lego.com/en-us" ]
    return (
        <div>
            <h3 >Links to my Hobbies</h3>
            <a href={hobbyLinks[0]}>80s music</a><br/>
            <a href={hobbyLinks[1]}>puzzles</a><br/>
            <a href={hobbyLinks[2]}>lego</a><br/>
        </div>)
}