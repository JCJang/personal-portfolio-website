import {useState, useEffect} from 'react'
import AccordionLabel from './AccordionLabel'
const Accordion = ({m, l, title="My Accordion", sectionTitles=[
  "How should I arrange bookshelves, and what information should I present with each book?",
  "Are my proposed features adequate for user purposes? What features do users suggest?",
  "How can I create meaningful discussions between users?",
  "How should I establish tone and reputation of the site?"
], sectionResultsArr=[
  [`Top criteria that influences the decision to read a book are subject matter, genre, and surprisingly, intuition. (66%, 61.7%, 53.2%) Following up are Reading a few pages (48.9%) and trust in the recommender (44.7%). Book popularity, book reviews, and ratings are of the least importance

    40.4% of users revealed that they research a book’s subject matter, and many readers also research the Historical location of the book (38.3%). 27.7% of readers do not conduct research, and only 14.9% of readers research the author’s biography before reading a book. 24 out of 34 readers who do conduct research (70.6%) gave qualitative answers as to why they do so, as categorized in one or more of the following reasons:
•	To understand whether they’ll enjoy the book/whether the subject matter is to their liking (33.3%)
•	To affirm the quality and standard of the book (25.0%)
•	To understand the author’s perspective (16.7%)
•	To understand the book’s structure and discourse (12.5%)
•	To understand a book’s historical location (12.5%)`,`After reading a book, more than half of users (61.7%) search for related or referenced books. In addition to searching for related books, there is also a major boost of interest in both a book’s historical background and its author after reading a book (40.4%, 44.7%). Many readers also research the subject matter after reading the book (46.8%).
After reading a book, almost half of the readers read reviews (48.9%), while 44.7% of readers discuss it with friends, and 36.2% write reviews or share their thoughts on social media.
Critical reviews is of interest to people who finished reading a book (48.9%), but not as much crucial to book discovery (1 person) and the decision whether or not to read a book (11 people / 23.4%).
`],
[`World literature map featuring little known authors: 75% of readers are interested in the proposed map, while 25% gave a maybe.`],
[` Book discussion partner matching: 72.7% are interested in this feature, while 25% gave a maybe, and 2.3% won’t use the feature. By asking readers to answer the qualitative question “What makes a good discussion?” I received plenty of feedback to consider. 29 (61.7%) people expressed their opinions on the matter, each of which falls into one or more of the categories below.
•	Prerequisite of having deeper understanding of the topic and the author and the book’s structure. Share knowledge that you have about the historical context or the author.  (37.9%)
•	Share your unique perspective (whether it be controversial or not) and opinions on the book. Debate but not to convince or persuade, but rather trade perspectives. (44.8%)
•	Make participants curious about rereading the book or see it in a new light (13.8%)
•	The ability to reason; systematicity. (13.8%)`],
[`Results from the question “How do you prefer to discover books?” revealed that browsing bookstore/ internet bookstore /library shelves and internet search are the top preferred methods of discovering new books. (68.1%, 44.7%) On the contrary, recommendation platforms are scarcely used 3 people (6.4%).`]
],
sectionApplicationArr=[
  [`A crucial feature to implement would be a subject matter filter. Information specific to the subject matter should be defined for reference purposes (definitions, introductions). This can perhaps be the subtitle for the book’s central argument. A book’s historical location is at the very least of referential importance, and must be present in the book query. I would include the author’s major life events (try to filter the text for keywords / link-tags from Wikipedia), display the year of publishing, and include the author’s age when they wrote the book. A table of contents in addition to a previewed paragraph also lay out crucial information for readers regarding a book’s structure.`,`Considering the popularity of searching for related of referenced books (61.7%), some kind of relational book discovery method should be implemented. Such a page would be practical and trustworthy, since the recommendations come directly from relation to a book a reader enjoys. It is important to visualize the book search user flow as a cycle. One book leads to another, then to ten more, and the database should support the book reading lifecycle at each stage.
Based on the popular actions taken by readers after reading a book, it seems reasonable to include more in-depth information regarding an author or the historical data of a book’s birth in the post-reading dashboard (keep the same key facts and smart transition to expand them). The subject matter panel from the pre-reading dashboard should also be available in the post-reading dashboard, and in the same location (but perhaps with reviews available). Since reviews are not as crucial to the book search process, reviews will be located in the post-reading space. 
`],
  [`Literature and Philosophy are the top subject matters (87.2% and 60.0%), meaning my initial database should prioritize these categories. In addition, this means that the development of a literature map is very much crucial.
The problem would be how to define “little-known”. The same thing comes to mind – why does this platform need to exist? The criteria that comes to mind is: date limit (must be ten years old), amount of reviews on goodreads etc. Where can I find quantitative data on a book’s popularity? Amount of google searches for the title of the book (regardless of author popularity).
`],
  [`How the initial discussion should be formatted remains to be decided. I must form a good initial discussion form based on these guidelines.`],
  [`Thus, it seems of a better choice to present my platform as more of a reliable library database. Word of mouth (38.3%) is the next preferred method, therefore the reputation of the site is important. The selected books must be of high caliber and rarity for the platform to have enough reason to exist.
For these reasons, the tone and design of the site must take a more serious tone. Loading speeds must be minimal.
`]
]
}) => {

const [focus, setFocus] = useState()

const textMargin = () => {
  if(m){
    return "3rem 5rem 1rem 5rem"
  }else{
    return "2rem 1rem"
  }
}

  return (

    <div className="Row" style={{background:"var(--table-neutral)",paddingBottom:"3rem", paddingTop:!m && "3rem",color:"var(--occlusion)"}}>

  <div className="subtitle1 transition selfCentered" style={{fontSize:"3.3rem",whiteSpace: "nowrap", width:"20vw",transform:"rotate(-90deg)"}}>Results</div>

        <div className="Column">
            <div>{sectionTitles.map((title, index)=>{
                return <AccordionLabel m={m} title={title} focus={focus} setFocus={setFocus} sectionResults={sectionResultsArr[index]} sectionApplication={sectionApplicationArr[index]}/>})}
              </div>
        </div>
    </div>

  )
}

export default Accordion
