import './NewMessages.css'

const NewMessages = () => {
  return (
    <form className='form'>
      <label className='lable'>Name</label>
      <input
        type='text'
        className='form__input'
      />
      <label className='lable'>Description</label>
      <textarea
        name=''
        id=''
        cols='30'
        rows='10'
        className='form__textarea'
      />
      <button>Add</button>
    </form>
  )
}

export default NewMessages
