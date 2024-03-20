const useModalClose = ({ setIsModalOpen }) => {

  const handleCloseBtn = () => {
    setIsModalOpen(false);
  };
  const handleClose = (e, reason) => {
    if (reason === "backdropClick") {
      setIsModalOpen(false);
    } else if (reason === "escapeKeyDown") {
      setIsModalOpen(false);
    } else if (e.target.textContent === "Close") {
      setIsModalOpen(false);
    }
  };
  return {
    handleClose, handleCloseBtn
  };
}
export default useModalClose;