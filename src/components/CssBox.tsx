import Box from './Box';

interface Props {
  cssText: string;
  setCssText: (value: string) => void;
}

function CssBox({ cssText, setCssText }: Props) {
  return (
    <Box.container>
      <Box.title>CSS Style</Box.title>
      <Box>
        <Box.textarea className="preview" value={cssText} onChange={(e) => setCssText(e.target.value)} />
      </Box>
    </Box.container>
  );
}

export default CssBox;
