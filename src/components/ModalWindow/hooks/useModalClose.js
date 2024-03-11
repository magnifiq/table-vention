const useModalClose = ({setIsModalOpen}) => {
  const handleClose = (e, reason) => {
    if (reason === "backdropClick") {
      setIsModalOpen(false);
    } else if (reason === "escapeKeyDown") {
      setIsModalOpen(false);
    }
  };
  return handleClose;
}
export default useModalClose;