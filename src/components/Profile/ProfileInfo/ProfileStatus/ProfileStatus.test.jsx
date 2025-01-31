 import renderer from 'react-test-renderer'
 import ProfileStatus from "./ProfileStatus.jsx";


describe('ProfileStatus component', () => {
    test('status from props should be in the state', () => {
        const component = renderer.create(<ProfileStatus status="hi"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("hi");
    });
    test('after creation span should be displayed with status', async () => {
        const component = renderer.create(<ProfileStatus status="hi"/>);
        const span = await component.root.findByType('span');
        span.props.onDoubleClick();
        const input = await component.root.findByType('input');
        expect(input.props.value).toBe("hi");
    });
    test('callback should be called', async () => {
        const mockCallback = jest.fn();
        const component = renderer.create(<ProfileStatus status="hi" updateProfileStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
})