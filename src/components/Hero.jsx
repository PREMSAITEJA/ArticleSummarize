import {logo} from '../assets'

export default function Hero() {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3' >
        <img src={logo} alt="Summerize_logo" className='w-28 object-contain'/>
        <button className='black_btn'
          type='button'
          onClick={()=>window.open('https://github.com/PREMSAITEJA')}
        >
          Github
        </button>
      </nav>
      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden'/>
        <span
          className='orange_gradient'>Bujji-GPT4
        </span>
      </h1>
      <h2 className='desc '>
        Simplify your reading with Summize , an open-source article Summarizer that transforms lengthy articles into clear and concise summaries.
      </h2>

    </header>
  )
}
