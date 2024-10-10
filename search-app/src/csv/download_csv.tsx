import Button from '../components/ui/button/button';
import useTheme from '../hooks/useTheme-hook';
import PayloadInterface from '../interfaces/payload_interface';

function DownloadCSV({
  data,
  itemsCount,
}: {
  data: PayloadInterface[];
  itemsCount: string;
}) {
  const { theme } = useTheme();
  const jsonToCsv = (jsonData: PayloadInterface[]) => {
    let csv = '';
    const headers = Object.keys(jsonData[0]);
    csv += `${headers.join(';')}\n`;
    jsonData.forEach((obj) => {
      const values = headers.map(
        (header) => obj[header as keyof PayloadInterface],
      );
      csv += `${values.join(';')}\n`;
    });

    return csv;
  };
  const csvData = new Blob([jsonToCsv(data)], { type: 'text/csv' });
  const csvURL = URL.createObjectURL(csvData);
  return (
    <a
      data-testid="download-link"
      href={csvURL}
      download={`${itemsCount}-items_pokemon_data.csv`}
    >
      <Button theme={theme} btnType="button">
        Download
      </Button>
    </a>
  );
}

export default DownloadCSV;
