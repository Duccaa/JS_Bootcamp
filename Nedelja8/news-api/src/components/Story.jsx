import React, { useEffect, useState } from 'react'
import { getStoryById } from '../services'

const Story = ({id}) => {
    const [story, setStory] = useState({})

    useEffect(() => {
        let mounted = true

        getStoryById(id).then(res=> {
            if(mounted) // ako je mounted onda setuj stori
                setStory(res.data)
        })
        return () => {mounted = false} //nece setovati stori jer komponenta nije ucitana 
    }, [])

    //LifeCycle metods
    // componentDidMount()
    //componentDidUnmount()
    //componentDidUpdate()
    
    return (
        <>
        <a href={story.url} target={"_blank"} rel="noopener noreferrer">{story.title}</a>
        <br></br>
        </>
    )
}

export default Story