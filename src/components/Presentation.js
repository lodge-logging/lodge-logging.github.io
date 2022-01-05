function Presentation() {
  return (
    <div id="presentation" className="flex flex-col">
      <div className="bg-gray-200 flex flex-col text-center px-36 py-20 h-video">
        <h2 className="text-6xl text-gray-800 mb-12 font-extrabold">Presentation</h2>
        <iframe className="rounded-lg border-2 border-gray-700 shadow-lg mx-auto h-full w-full" src="https://www.youtube.com/embed/HToQQsURZWo" title="YouTube video player" frameOrder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        {/* <iframe className="rounded-lg border-2 shadow-lg mx-auto h-full w-full border-gray-700" src="https://www.youtube-nocookie.com/embed/L-rbSRf2BrU?rel=0&amp;controls=0&amp;showinfo=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe> */}
      </div>
    </div>
  )
}

export default Presentation;