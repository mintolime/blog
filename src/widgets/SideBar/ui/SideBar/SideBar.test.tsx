import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { SideBar } from 'widgets/SideBar/ui/SideBar/SideBar';

describe('classNames', () => {
    test('side bar', () => {
        componentRender(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('side bar toogle btn', () => {
        componentRender(<SideBar />);
        const toogleBtn = screen.getByTestId('sidebar-toogle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toogleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collabsed');
    });
});
