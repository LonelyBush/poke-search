import { fireEvent, render, waitFor } from '@testing-library/react';
import { beforeAll, describe, expect, test, vi } from 'vitest';
import DownloadCSV from './download_csv';
import PayloadInterface from '../interfaces/payload_interface';
import ProviderWrapper from '../utils/wrappers/provider_wrapper';

describe('DownloadCSV Component', () => {
  beforeAll(() => {
    window.URL.createObjectURL = vi.fn(() => 'blob:mock-url');
  });

  const mockData: PayloadInterface[] = [
    { id: '0', name: 'charizard', height: '15', experience: '100' },
    { id: '1', name: 'bulba', height: '20', experience: '142' },
    { id: '2', name: 'Ivy', height: '25', experience: '150' },
  ];

  test('renders the Download button', () => {
    const { getByRole } = render(
      <DownloadCSV
        data={mockData}
        itemsCount={mockData.length.toString()}
        className="submit-btn"
      />,
      { wrapper: ProviderWrapper },
    );

    const buttonElement = getByRole('button', { name: 'Download' });
    expect(buttonElement).toBeInTheDocument();
  });

  test('generates a CSV download link', async () => {
    const { getByRole } = render(
      <DownloadCSV
        data={mockData}
        itemsCount={mockData.length.toString()}
        className="submit-btn"
      />,
      { wrapper: ProviderWrapper },
    );

    const linkElement = getByRole('link');
    expect(linkElement).toHaveAttribute('download', '3-items_pokemon_data.csv');

    fireEvent.click(linkElement);
    await waitFor(() => {
      const href = linkElement.getAttribute('href');
      expect(href).toContain('blob:');
    });
  });
});
