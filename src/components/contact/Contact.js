import ImageFadeIn from '../../customHooks/imageFadeIn'

const Contact = ({m, l}) => {

  const contactStyle = () => {
    return {
      background:"var(--contact-bg)",
      color: "var(--contact-text)",
      height:"var(--desktopheight)",
      overflowY:"auto",
      padding:"2rem 5rem"
    }
  };

  return (
    <div>Contact</div>
  )
}

export default Contact
