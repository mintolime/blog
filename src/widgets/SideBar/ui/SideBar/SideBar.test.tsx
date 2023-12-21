import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation';
import { SideBar } from 'widgets/SideBar/ui/SideBar/SideBar';

describe('classNames', () => {
    test('side bar', () => {
        renderWithTranslation(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('side bar toogle btn', () => {
        renderWithTranslation(<SideBar />);
        const toogleBtn = screen.getByTestId('sidebar-toogle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toogleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collabsed');
    });
});
