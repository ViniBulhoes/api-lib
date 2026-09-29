function suporteN1(chamado){
    console.log("N1 recebeu o seguinte chamado:");
    if(chamado.prioridade === "normal"){
        console.log("N1 assumiu o chamado");
        return "Suporte N1 atendeu"
    }
    console.log("N1 não conseguiu resolver");
    console.log("Encaminhando para N2");
    return suporteN2(chamado);
};

function suporteN2(chamado){
    console.log("N2 recebeu o seguinte chamado:");
    if(chamado.prioridade === "media"){
        console.log("N2 assumiu o chamado");
        return "Suporte N2 atendeu"
    }
    console.log("N2 não conseguiu resolver");
    console.log("Encaminhando para Especialista");
    return especialista(chamado);
}

function especialista(chamado){
    console.log("Especialista recebeu o seguinte chamado:");
    if(chamado.prioridade === "Alta"){
        console.log("Especialista assumiu o chamado");
        return "Suporte Especialista atendeu"
    }
    
    throw new Error("Nenhum responsável encontrado")
};

module.exports = {
    suporteN1
}