export const useHome = () => {

  const handleWords = (event: React.MouseEvent<HTMLSpanElement>) => {
    console.log('Span cliqué:', event);
  };

  return {
    handleWords
  };
};