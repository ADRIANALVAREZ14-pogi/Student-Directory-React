const ListContainer = ({data}) => {
    return(
        <>
         <section id="studentList">
            {data.map((student) => (
                <article key={student.id}>
                    <h1>{student.name}</h1>
                    <p>{student.program}</p>
                    <button>DELETE</button>
                </article>
            ))}

         </section>

        </>
    )
}

export default ListContainer;