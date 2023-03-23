import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1f1e25',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        maxWidth: 337,
        paddingLeft: 10,
    },

    check: {
        borderRadius: 50,
        backgroundColor: '#5E60CE',
    },

    noCheck: {
        borderRadius: 50,
        borderColor: '#4EA8DE',
    },

    nameChecked: {
        flexGrow: 9,
        fontSize: 16,
        color: '#808080',
        textDecorationLine: 'line-through',
        marginLeft: 12,
        maxWidth: 230,
    },

    name: {
        flexGrow: 9,
        fontSize: 16,
        color: 'white',
        marginLeft: 12,
        maxWidth: 230,
    },

    containerTask: {
        flexGrow: 1,
        alignItems: 'flex-end',
    },

    button: {
        width: 50,
        height: 50,
        borderRadius: 5,
        //backgroundColor: '#e23c44',
        alignItems: 'center',
        justifyContent: 'center'
    },
})