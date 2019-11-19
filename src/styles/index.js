import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    headerButton: {
        height: 44,
        width: 44,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    remindersContainer: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    },
    remindersContent : {
        flex: 1,
        paddingTop: 60
    },
    remindersHeader: {
        marginTop: 0
    },
    remindersHeaderText: {
        textAlign: 'center',
        fontSize: 24,
        color: 'purple',
        fontWeight: '500'
    },
    remindersInputContainer: {
        marginLeft: 20,
        marginRight: 20,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: '#000000',
        shadowOffset: { width: 2, height: 2 }
    },
    remindersInput: {
        height: 60,
        backgroundColor: '#ffffff',
        paddingLeft: 10,
        paddingRight: 10
    }
});